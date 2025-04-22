"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import FullMap from "../components/FullMap";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) newErrors.email = "el. paštas privalomas";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "neteisingas el. pašto formatas";

    if (!name) newErrors.name = "vardas privalomas";
    if (!message) newErrors.message = "žinutė privaloma";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
    } else return;
    const jsonData = {
      name,
      email,
      message,
      link: "none",
      property: "none",
    };
    ///client
    try {
      await fetch("api/property/emails", {
        method: "POST",
        body: JSON.stringify(jsonData),
      });
    } catch (error) {
      console.log(error, "error");
    }

    ///owner
    try {
      const res = await fetch("api/property/emails/owner", {
        method: "POST",
        body: JSON.stringify(jsonData),
      });
      console.log(res)
    } catch (error) {
      console.log("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      window.location.reload();
    }
  };

  return (
    <Card className="bg-white border w-full max-w-md rounded-xl overflow-hidden backdrop-blur-sm bg-opacity-95">
      <CardHeader className=" p-6 border-b">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Mail className="h-5 w-5 text-amber-600" />
          Parašykite žinutę
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-6">
        
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label
                htmlFor="email"
                className={`text-sm font-medium ${errors.email ? "text-red-500" : "text-gray-700"}`}
              >
                El. paštas{" "}
                {errors.email && (
                  <span className="text-sm font-normal">({errors.email})</span>
                )}
              </Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 ${errors.email ? "border-red-500 ring-red-500" : "border-gray-300"}`}
              />
            </div>
            <div>
              <Label
                htmlFor="name"
                className={`text-sm font-medium ${errors.name ? "text-red-500" : "text-gray-700"}`}
              >
                Vardas{" "}
                {errors.name && (
                  <span className="text-sm font-normal">({errors.name})</span>
                )}
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`mt-1 ${errors.name ? "border-red-500 ring-red-500" : "border-gray-300"}`}
              />
            </div>
            <div>
              <Label
                htmlFor="message"
                className={`text-sm font-medium ${errors.message ? "text-red-500" : "text-gray-700"}`}
              >
                Žinutė{" "}
                {errors.message && (
                  <span className="text-sm font-normal">
                    ({errors.message})
                  </span>
                )}
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Jūsų žinutė..."
                className={`resize-none min-h-[120px] mt-1 ${errors.message ? "border-red-500 ring-red-500" : "border-gray-300"}`}
              />
            </div>
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Siunčiama...
                  </span>
                ) : (
                  "Išsiųsti pranešimą"
                )}
              </Button>
            </div>
          </form>
        
      </CardContent>
    </Card>
  );
};

const Info = () => {
  return (
    <Card className="bg-white border w-full max-w-md rounded-xl overflow-hidden backdrop-blur-sm bg-opacity-95">
      <CardHeader className="border-b p-6">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <MapPin className="h-5 w-5 text-amber-600" />
          Kontaktai
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="space-y-6">
          <div className="flex items-start gap-4 flex-wrap">
            <div className="bg-amber-100 p-3 rounded-full">
              <Mail className="text-amber-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">El. paštas</h3>
              <a
                href="mailto:giedre@example.com"
                className="text-amber-600 hover:text-amber-700 transition-colors"
              >
                g.gedeikiene@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 flex-wrap">
            <div className="bg-amber-100 p-3 rounded-full">
              <Phone className="text-amber-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">
                Telefono numeris
              </h3>
              <a
                href="tel:+37060000000"
                className="text-amber-600 hover:text-amber-700 transition-colors"
              >
                +370 610 95591
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Page = () => {
  return (
    <div className="relative w-full min-h-screen py-20">
      {/* Full screen background map */}
      <div className="absolute inset-0 z-0">
        <FullMap empty={true} />
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/10 z-5"></div>

      {/* Content container */}
      <div className="w-full px-4">
        <div className="relative z-7 md:w-3xl lg:w-4xl border shadow-2xl container mx-auto px-10 py-12 w-fit bg-white rounded-lg p-4">
          {/* Page heading */}
          <div className="text-center mb-12 bg-white/20 rounded-md p-2 w-fit m-auto backdrop-blur-md">
            <h1 className="text-4xl font-bold drop-shadow-md">
              Susisiekite su mumis
            </h1>
            <p className="mt-2 max-w-2xl mx-auto drop-shadow">
              Turite klausimų apie mūsų apartamentus? Susisiekite su mumis ir
              mes mielai padėsime.
            </p>
          </div>

          {/* Cards container */}
          <div className="grid md:grid-cols-2 md:place-items-start place-items-center gap-12 max-w-4xl mx-auto">
            <Form />
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
