import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z.string().min(1),
  timeline: z.string().min(1),
  message: z.string().min(10),
  cryptoPayment: z.boolean().refine(val => val === true)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate form data
      const validatedData = contactSchema.parse(req.body);
      
      // In a real application, you would store this data or send an email
      // For now, we'll just return success
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: 'Form submitted successfully'
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: 'Validation error',
          errors: error.errors
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: 'An unexpected error occurred'
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
