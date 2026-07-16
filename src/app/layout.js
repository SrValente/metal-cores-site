import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grupo Metal Cores | Estruturas Metálicas e Esquadrias",
  description: "Atuando no mercado desde 1989. Soluções em esquadrias de alumínio e estruturas metálicas no Rio de Janeiro. Projetos de médio e grande porte.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
