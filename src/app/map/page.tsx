"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { supabase } from "@/lib/supabaseClient";
import { OngLocation } from "../types/ongLocation";
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
import CadastroOngPage from "./components/form";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Todos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOngs = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("OngLocation")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Erro ao buscar ONGs:", error);
      } else {
        console.log("ONGs recebidas:", data);
        setOngs(data ?? []);
      }
      setLoading(false);
    };

    fetchOngs();
  }, []);

  // 🔹 Filtro local
  const filteredOngs = ongs.filter((ong) => {
    const matchesSearch =
      ong.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ong.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "Todos" || ong.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getServiceColor = (type: string) => {
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

  // 🔹 Renderização
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna lateral */}
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
                    onClick={() => setSelectedOng(ong)}
                    className={`cursor-pointer hover:shadow-md transition-all ${
                      selectedOng?.id === ong.id ? "ring-2 ring-[#ffc449]" : ""
                    }`}
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
                        {ong.services.slice(0, 2).map((s) => (
                          <Badge key={s} variant="outline" className="text-xs">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Mapa e detalhes */}
          <div className="lg:col-span-2">
            <CardContent>
              <MapCard
                filteredOngs={filteredOngs}
                setSelectedOng={setSelectedOng}
              />
              {selectedOng && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {selectedOng.name}
                  </h3>
                  <Badge
                    className={`${getServiceColor(selectedOng.type)} text-white`}
                  >
                    {selectedOng.type}
                  </Badge>
                  <p className="mt-3 text-gray-700">
                    {selectedOng.description}
                  </p>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
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
                </div>
              )}
            </CardContent>
            <div className="flex justify-center">
              <CadastroOngPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
