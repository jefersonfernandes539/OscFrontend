"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { Input } from "@/ui/input";
import { Badge } from "@/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { MapPin, Search, Phone, Mail } from "lucide-react";
import dynamic from "next/dynamic";
import { OngLocation } from "../types/ongLocation";
import axios from "axios";

// Importação dinâmica do mapa
const MapCard = dynamic(() => import("../map/components/index"), {
  ssr: false,
});

const serviceTypes: string[] = [
  "Todos",
  "Alimentação",
  "Moradia",
  "Saúde",
  "Educação",
  "Capacitação",
  "Jurídico",
];

export default function MapaPage() {
  const [ongs, setOngs] = useState<OngLocation[]>([]);
  const [selectedOng, setSelectedOng] = useState<OngLocation | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("Todos");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOngs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5180/api/onglocation"
        );
        console.log("ONGs recebidas:", response.data);
        setOngs(response.data ?? []);
      } catch (error) {
        console.error("Erro ao buscar ONGs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOngs();
  }, []);

  const filteredOngs = Array.isArray(ongs)
    ? ongs.filter((ong) => {
        const matchesSearch =
          ong?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ong?.description?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType =
          selectedType === "Todos" || ong?.type === selectedType;
        return matchesSearch && matchesType;
      })
    : [];

  const getServiceColor = (type: string): string => {
    switch (type) {
      case "Alimentação":
        return "bg-orange-500";
      case "Moradia":
        return "bg-blue-500";
      case "Saúde":
        return "bg-red-500";
      case "Educação":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Buscar Serviços
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Digite o nome ou serviço..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {loading ? (
              <p>Carregando ONGs...</p>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredOngs.map((ong) => (
                  <Card
                    key={ong.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedOng?.id === ong.id ? "ring-2 ring-[#ffc449]" : ""
                    }`}
                    onClick={() => setSelectedOng(ong)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-sm">{ong.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {ong.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">
                        {ong.address}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {ong.services.slice(0, 2).map((service: string) => (
                          <Badge
                            key={service}
                            variant="outline"
                            className="text-xs"
                          >
                            {service}
                          </Badge>
                        ))}
                        {ong.services.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{ong.services.length - 2}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <CardContent>
              <MapCard
                filteredOngs={filteredOngs}
                setSelectedOng={setSelectedOng}
              />

              {selectedOng && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {selectedOng.name}
                      </h3>
                      <Badge
                        className={`${getServiceColor(
                          selectedOng.type
                        )} text-white`}
                      >
                        {selectedOng.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">
                    {selectedOng.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{selectedOng.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>{selectedOng.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span>{selectedOng.email}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Serviços Oferecidos:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedOng.services.map((service: string) => (
                        <Badge key={service} variant="outline">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
}
