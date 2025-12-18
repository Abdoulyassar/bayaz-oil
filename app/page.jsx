import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "2348000110011"; // international format

export default function BayazOils() {
  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const message = `*New Order – Bayaz Oils*%0A
Name: ${data.get("name")}%0A
Phone: ${data.get("phone")}%0A
Delivery: ${data.get("delivery")}%0A
Address: ${data.get("address")}%0A
Order: ${data.get("order")}%0A
Notes: ${data.get("notes") || "-"}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 text-gray-800">
      {/* Header */}
      <header className="p-6 bg-green-700 text-white shadow-lg">
        <h1 className="text-3xl font-bold">Bayaz Oils</h1>
        <p className="text-sm">Pure Palm Oil • Groundnut Oil • Vegetable Oil</p>
      </header>

      {/* Hero */}
      <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="p-10 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Fresh & Trusted Cooking Oils</h2>
        <p className="max-w-2xl mx-auto text-lg">Order quality cooking oils and get fast doorstep delivery within Kano and outside Kano.</p>
        <Button className="mt-6 px-8 py-6 text-lg">Order via WhatsApp</Button>
      </motion.section>

      {/* Products & Prices */}
      <section className="grid md:grid-cols-3 gap-6 p-10">
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-3">Palm Oil</h3>
            <ul className="space-y-2 text-sm">
              <li>5 Litres – ₦6,000</li>
              <li>10 Litres – ₦10,000</li>
              <li>25 Litres – ₦20,000</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-3">Groundnut Oil</h3>
            <ul className="space-y-2 text-sm">
              <li>5 Litres – ₦7,500</li>
              <li>10 Litres – ₦15,000</li>
              <li>20 Litres – ₦30,000</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-3">Vegetable Oil</h3>
            <ul className="space-y-2 text-sm">
              <li>5 Litres – ₦8,000</li>
              <li>10 Litres – ₦16,000</li>
              <li>20 Litres – ₦32,000</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Order Form */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Place Your Order</h2>
        <form onSubmit={handleWhatsAppOrder} className="max-w-3xl mx-auto grid gap-4">
          <Input name="name" placeholder="Full Name" required />
          <Input name="phone" placeholder="Phone Number" required />
          <Select name="delivery" required>
            <SelectTrigger><SelectValue placeholder="Delivery Location" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Within Kano">Within Kano</SelectItem>
              <SelectItem value="Outside Kano">Outside Kano</SelectItem>
            </SelectContent>
          </Select>
          <Input name="address" placeholder="Delivery Address" required />
          <Input name="order" placeholder="Product & Quantity" required />
          <Textarea name="notes" placeholder="Additional Notes (optional)" />
          <Button className="py-6 text-lg">Send Order via WhatsApp</Button>
        </form>
        <p className="text-center mt-4 text-sm">Payments supported: Bank Transfer & Paystack (to be activated)</p>
      </section>

      {/* Footer */}
      <footer className="p-8 bg-green-800 text-white text-center">
        <p>📞 Phone/WhatsApp: 08160515497</p>
        <p>📍 No. 02 Shehu Barkum Street, Unguwa Uku, Tarauni LGA, Kano State, Nigeria</p>
        <p className="mt-2 text-xs">© {new Date().getFullYear()} Bayaz Oils. All rights reserved.</p>
      </footer>
    </div>
  );
}

