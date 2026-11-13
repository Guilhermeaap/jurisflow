import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";


// Card Login
function CardLogin(){
    return(
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-white shadow-2xl backdrop-blur-md drop-shadow-2xl">
            <div className="">
                <div className="flex flex-col py-4">
                    <span className="text-2xl mb-1 font-semibold "
                    >
                        Bem-vindo de volta
                    </span>
                    <span className="text-xs text-gray-500">Acesse seu ambiente de trabalho.</span>
                </div>

                <div className="my-1">
                    <span className="text-[11px] font-semibold text-gray-500 uppercase">E-mail corporativo</span>
                    <Input
                    className="py-5 my-2 "
                    placeholder="nome@seuescritorio.com.br"
                    >
                    </Input>
                </div>

                <div className="">
                    <span>Senha</span>
                    <Input
                    className="py-5 my-2 caret-black "
                    type="password"
                    placeholder="********"
                    >
                    </Input>
                </div>

                <div className="my-4 w-full ">
                    <Button
                        type="button"
                        className="rounded-xl  bg-linear-to-t from-pink-600  to-pink-800 px-6 py-5 text-white backdrop-blur-xl w-full font-semibold transition-all duration-300 shadow-xl shadow-pink-800/40 hover:brightness-110 active:scale-95 "
                        
                    >

                        Entrar na plataforma
                        <ArrowRight className="hover:scale-105"/>
                    </Button>
                </div>
            </div>
            
        </div>
    )
}

//Pagina Principal
export default function Welcome(){
    const nomeProjeto = 'J U R I S F L O W'
    return (
        <main className="flex item-center justify-center min-h-screen bg-slate-950 ">
            
            <div className=" flex max-w-7xl flex-col items-center justify-between p-12 lg:flex-row min-h-screen w-full">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -top-3 mt-48 -left-60 h-[600px] w-2xl rounded-full bg-[#7A1024]/50 blur-3xl" />

                    <div className="absolute -right-32 h-[600px] w-2xl rounded-full bg-pink-700/25 blur-3xl" />
                </div>

                {/* Conteudo da Pagina */}
                <div className="relative z-10 text-center lg:text-left ml-6">
                    <h1 className="text-5xl/relaxed font-bold text-white py-5 ">
                        O futuro da 
                        <br />
                        gestão jurídica.
                        <br />
                        Já começou.
                    </h1>
                    
                    <p className="mt-4 text-lg text-gray-400">
                        Gestão inteligente para escritórios que desejam 
                        <br />
                        mais clareza, precisão e tempo para crescer.
                    </p>

                </div>
                <CardLogin/>

            </div>
        </main>
    )
    
}