import { useState } from 'react';
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  timeline: z.string().min(1, { message: "Please select a timeline." }),
  message: z.string().min(10, { message: "Please provide more details about your project." }),
  cryptoPayment: z.boolean().refine(val => val === true, {
    message: "You must agree to crypto payment terms."
  })
});

type FormData = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      timeline: "",
      message: "",
      cryptoPayment: false
    }
  });
  
  const mutation = useMutation({
    mutationFn: (data: FormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your submission! We will contact you shortly.",
      });
      form.reset();
      setIsSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "There was a problem submitting your form. Please try again.",
        variant: "destructive"
      });
    }
  });
  
  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="appear">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Get Started Today</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready for your new website? Fill out the form or contact us directly on WhatsApp.
            </p>
            
            <Card className="bg-white rounded-xl p-8 shadow-md mb-8 border border-gray-200">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold font-heading mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                      <i className="fab fa-whatsapp text-secondary"></i>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">WhatsApp</p>
                      <a href="https://wa.me/919347455431" className="font-medium hover:text-secondary transition-colors">
                        +91 9347455431
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-clock text-secondary"></i>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Working Hours</p>
                      <p className="font-medium">24/7 Support Available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold font-heading mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                    <span className="text-gray-600">Ultra-fast delivery - same day or 3-hour turnaround</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                    <span className="text-gray-600">Professional, responsive web design that reflects your brand</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                    <span className="text-gray-600">Simple crypto payment process - no complicated contracts</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                    <span className="text-gray-600">Ongoing support and quick response to your questions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="appear" data-delay="200">
            <Card className="bg-white rounded-xl p-8 shadow-md h-full border border-gray-200">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold font-heading mb-6">Tell Us About Your Project</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-check text-2xl text-accent"></i>
                    </div>
                    <h4 className="text-xl font-bold mb-4">Thank You!</h4>
                    <p className="text-gray-600 mb-6">
                      Your request has been submitted successfully. We'll get back to you shortly.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select project type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="business">Business Website</SelectItem>
                                <SelectItem value="ecommerce">E-Commerce</SelectItem>
                                <SelectItem value="portfolio">Portfolio</SelectItem>
                                <SelectItem value="landing">Landing Page</SelectItem>
                                <SelectItem value="blog">Blog</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Delivery Timeline</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="3h">3 Hours (Express)</SelectItem>
                                <SelectItem value="24h">24 Hours (Standard)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Details</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your project requirements..." 
                                rows={4}
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="cryptoPayment"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I understand that payment is accepted only in USDT or BTC
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-secondary hover:bg-secondary/90 text-white"
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? "Submitting..." : "Submit Request"}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
