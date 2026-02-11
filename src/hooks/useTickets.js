import { useState, useEffect } from "react";
import { solicitacoesClienteMock } from "../data/mockTickets";
import useAuth from "./useAuth";

export const useTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // Load tickets for current user
  useEffect(() => {
    if (user) {
      // Filter tickets by user email
      const userTickets = solicitacoesClienteMock.filter(
        (ticket) => ticket.email === user.email,
      );
      setTickets(userTickets);
    } else {
      setTickets([]);
    }
  }, [user]);

  const addTicket = (formData) => {
    setLoading(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        const newTicket = {
          id: "SOL-" + Date.now().toString().slice(-6),
          ...formData,
          dataCriacao: new Date().toISOString(),
          status: "enviado",
          atualizacoes: [
            {
              id: `upd-${Date.now()}-1`,
              data: new Date().toISOString(),
              mensagem:
                "Solicitação enviada com sucesso. Nossa equipe irá analisar em até 2 horas.",
              autor: "sistema",
            },
          ],
        };

        setTickets((prev) => [newTicket, ...prev]);
        setLoading(false);
        resolve(newTicket);
      }, 800);
    });
  };

  const getTicketById = (id) => {
    return tickets.find((ticket) => ticket.id === id);
  };

  const addUpdate = (ticketId, mensagem, autor = "cliente") => {
    setTickets((prev) =>
      prev.map((ticket) => {
        if (ticket.id === ticketId) {
          const newUpdate = {
            id: `upd-${Date.now()}`,
            data: new Date().toISOString(),
            mensagem,
            autor,
          };

          return {
            ...ticket,
            dataAtualizacao: new Date().toISOString(),
            atualizacoes: [...ticket.atualizacoes, newUpdate],
          };
        }
        return ticket;
      }),
    );
  };

  const getActiveTickets = () => {
    return tickets.filter(
      (ticket) =>
        ticket.status === "enviado" ||
        ticket.status === "em-analise" ||
        ticket.status === "em-andamento" ||
        ticket.status === "aguardando-pecas",
    );
  };

  const getCompletedTickets = () => {
    return tickets.filter(
      (ticket) => ticket.status === "resolvido" || ticket.status === "fechado",
    );
  };

  const getSummary = () => {
    const active = getActiveTickets().length;
    const completed = getCompletedTickets().length;

    return {
      total: tickets.length,
      active,
      completed,
      inProgress: tickets.filter((t) => t.status === "em-andamento").length,
      inAnalysis: tickets.filter((t) => t.status === "em-analise").length,
    };
  };

  return {
    tickets,
    loading,
    addTicket,
    getTicketById,
    addUpdate,
    getActiveTickets,
    getCompletedTickets,
    getSummary,
  };
};
