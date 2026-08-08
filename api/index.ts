import express from "express";

const app = express();
app.use(express.json());

// In-memory submissions store for Vercel serverless instance
const rfqSubmissions: any[] = [];
const contactMessages: any[] = [];

// API Endpoints
app.get("/api/health", (_req, res) => {
  res.json({ 
    status: "ok", 
    app: "Adil Jundi Mohamed Import Export Ltd. Web Portal",
    timestamp: new Date().toISOString() 
  });
});

app.get("/api/company-info", (_req, res) => {
  res.json({
    name: "Adil Jundi Import Export Ltd.",
    legalName: "Adil Jundi Mohammed Import Export Ltd.",
    motto: "Your Global Source for Quality. Anywhere. Anytime.",
    foundedEth: "2010 Ethiopian Calendar",
    headquarters: "Addis Ababa, Ethiopia, Lideta Awash Office, 1st Floor",
    phones: ["+251915321018", "+251254660322"],
    email: "adiljundimohamed@gmail.com",
    website: "www.adiljundimohamed.com",
    ceo: "Mr. Adil Jundi Mohamed",
    financials2023: {
      revenueUSD: 2.8,
      grossMargin: 0.22,
      netProfitMargin: 0.11,
      yoyGrowth: 0.14,
      debtToEquityRatio: 0.4
    }
  });
});

app.post("/api/rfq", (req, res) => {
  const { organizationName, contactPerson, email, phone, category, items, message, institutionType } = req.body;
  
  if (!organizationName || !contactPerson || !email) {
    return res.status(400).json({ error: "Missing required fields: organizationName, contactPerson, or email." });
  }

  const refNumber = `AJ-RFQ-${Date.now().toString().slice(-6)}`;
  const submission = {
    refNumber,
    organizationName,
    contactPerson,
    email,
    phone: phone || "+251915321018 / +251254660322",
    category: category || "General Procurement",
    items: items || [],
    message: message || "General quote enquiry",
    institutionType: institutionType || "Government / University",
    status: "Submitted & Under Tender Review",
    submittedAt: new Date().toISOString()
  };

  rfqSubmissions.unshift(submission);

  return res.json({
    success: true,
    message: "Request for Quotation submitted successfully to Adil Jundi Import Export Ltd. Procurement Department.",
    data: submission
  });
});

app.get("/api/rfq", (_req, res) => {
  res.json({ count: rfqSubmissions.length, submissions: rfqSubmissions });
});

app.post("/api/contact", (req, res) => {
  const { name, email, phone, subject, message, organization } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields: name, email, or message." });
  }

  const refNumber = `AJ-MSG-${Date.now().toString().slice(-6)}`;
  const msgData = {
    refNumber,
    name,
    organization: organization || "N/A",
    email,
    phone: phone || "N/A",
    subject: subject || "General Inquiry",
    message,
    submittedAt: new Date().toISOString()
  };

  contactMessages.unshift(msgData);

  return res.json({
    success: true,
    message: "Your message has been sent to Lideta HQ Procurement team.",
    data: msgData
  });
});

app.get("/api/contact", (_req, res) => {
  res.json({ count: contactMessages.length, messages: contactMessages });
});

export default app;
