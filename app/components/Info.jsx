"use client";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

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
  export default Info