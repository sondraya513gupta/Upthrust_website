import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Submission {
  id: string;
  email: string;
  consent: boolean;
  source: string;
  timestamp: string;
  userAgent?: string;
}

const dataDir = path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "submissions.json");

// Helper to ensure data directory and file exist
function getSubmissions(): Submission[] {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2), "utf-8");
      return [];
    }
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.error("Error reading submissions:", error);
    return [];
  }
}

function saveSubmissions(submissions: Submission[]): void {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving submissions:", error);
  }
}

// GET: Easily inspect saved submissions during the interview
export async function GET() {
  const submissions = getSubmissions();
  return NextResponse.json({
    status: "success",
    count: submissions.length,
    submissions,
  });
}

// POST: Handle form submission with full validation
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, consent } = body;

    // Validation 1: Required Email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { status: "error", message: "Email address is required." },
        { status: 400 }
      );
    }

    // Validation 2: Email Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { status: "error", message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Validation 3: Consent Checkbox
    if (!consent) {
      return NextResponse.json(
        { status: "error", message: "You must consent to receive updates." },
        { status: 400 }
      );
    }

    // Create record
    const newSubmission: Submission = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      email: email.trim().toLowerCase(),
      consent: Boolean(consent),
      source: "Upthrust Footer Newsletter Form",
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || undefined,
    };

    const existing = getSubmissions();
    existing.unshift(newSubmission);
    saveSubmissions(existing);

    console.log(`[Form Submission Stored] ID: ${newSubmission.id}, Email: ${newSubmission.email}`);

    return NextResponse.json({
      status: "success",
      message: "Form submitted successfully.",
      submission: {
        id: newSubmission.id,
        email: newSubmission.email,
        timestamp: newSubmission.timestamp,
      },
    });
  } catch (error) {
    console.error("Form handling error:", error);
    return NextResponse.json(
      { status: "error", message: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
