import Link from "next/link";
import Image from "next/image";

import { Container } from "./container";

import PhoneIcon from "@/assets/icons/phone-icon.svg";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import FacebookIcon from "@/assets/icons/facebook-icon.svg";
import InstagramIcon from "@/assets/icons/instagram-icon.svg";
import LocalizationIcon from "@/assets/icons/localization-icon.svg";

export function Footer() {
  return (
    <section className="w-full bg-black text-white pt-6" id="contato">
      <Container className="py-8">
        <footer className=" flex flex-col items-center md:flex-row md:items-start md:justify-between gap-6 h-full w-full">
          <div className="w-full h-full flex flex-col gap-6 items-center md:w-1/2">
            <div className="relative flex items-center w-full">
              <hr className=" text-green-primary w-full h-full align-middle" />
              <div className="font-secondary w-full text-white text-center text-2xl bg-black">
                <p>Entre em</p>
                <p className="text-green-primary">Contato</p>
              </div>
              <hr className=" text-green-primary w-full h-full align-middle" />
            </div>
            <div className="hidden md:flex w-full h-full flex-col gap-6 items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.112845143973!2d-60.05824242257682!3d-3.0644938097396097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c110067ee23fb%3A0x62517df44207d915!2sAMZ%20Autope%C3%A7as%20%7C%20Pe%C3%A7as%20e%20Baterias%20em%20Manaus!5e0!3m2!1spt-BR!2sbr!4v1768782917014!5m2!1spt-BR!2sbr"
                // height="250"
                className="w-full h-56 rounded-3xl border-2 border-green-primary"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="mt-6 w-full  flex justify-center gap-6 font-secondary md:hidden">
            <Link href="https://www.instagram.com/amzautopecas" target='_blank' className="flex gap-1 items-center">
              <Image src={InstagramIcon} alt="ícone do Instagram" />
              <span>Instagram</span>
            </Link>
            <Link href="https://www.facebook.com/841397619046428" target='_blank' className="flex gap-1 items-center">
              <Image src={FacebookIcon} alt="ícone do Facebook" />
              <span>Facebook</span>
            </Link>
          </div>

          <div className="flex flex-col w-full justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-secondary w-full mt-12 px-4">
              <div className="w-full flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                  <Image src={PhoneIcon} alt="ícone do telefone" />
                  <p className="text-xl font-bold uppercase">Contato</p>
                </div>
                <Link
                  href="tel:+55092992352795"
                  className="flex gap-2 items-center ml-6"
                >
                  <p className="font-light">092</p>
                  <p className="text-2xl">99235-2795</p>
                </Link>
              </div>

              <div className="w-full flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                  <Image src={PhoneIcon} alt="ícone do telefone" />
                  <p className="text-xl font-bold uppercase">Whatsapp</p>
                </div>
                <Link
                  href="https://wa.me/55092993780593"
                  className="flex gap-2 items-center ml-6"
                >
                  <p className="font-light">092</p>
                  <p className="text-2xl">99378-0593</p>
                </Link>
              </div>

              <div className="w-full flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                  <Image src={LocalizationIcon} alt="ícone de localização" />
                  <p className="text-xl font-bold uppercase">Localização</p>
                </div>
                <div className=" ml-6 font-light">
                  <p>Av. Dublin, 1504 - Planalto</p>
                  <p>Manaus - AM, 69045-080</p>
                </div>
              </div>

              <div className="w-full flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                  <Image src={CalendarIcon} alt="ícone de calendário" />
                  <p className="text-xl font-bold uppercase">
                    Horário de Funcionamento
                  </p>
                </div>
                <div className=" ml-6 font-light">
                  <div className="flex justify-between items-center">
                    <p>Segunda a Sexta</p>
                    <p className="font-bold">07H00 - 21H00</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>Sábado e Domingo</p>
                    <p className="font-bold">07H00 - 20H00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex w-full flex-col mt-12 px-4">
              <hr className="w-full text-green-primary" />
              <div className="w-full items-center justify-start gap-8 flex mt-4">
                <Link href="https://www.instagram.com/amzautopecas" target='_blank' className="flex gap-3 items-center">
                  <Image src={InstagramIcon} alt="ícone do Instagram" />
                  <span>Instagram</span>
                </Link>
                <Link href="https://www.facebook.com/841397619046428" target='_blank' className="flex gap-3 items-center">
                  <Image src={FacebookIcon} alt="ícone do Facebook" />
                  <span>Facebook</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 px-6 w-full md:hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.112845143973!2d-60.05824242257682!3d-3.0644938097396097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c110067ee23fb%3A0x62517df44207d915!2sAMZ%20Autope%C3%A7as%20%7C%20Pe%C3%A7as%20e%20Baterias%20em%20Manaus!5e0!3m2!1spt-BR!2sbr!4v1768782917014!5m2!1spt-BR!2sbr"
              height="250"
              className="w-full rounded-3xl border-2 border-green-primary"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </footer>
      </Container>
      <div className="text-center mt-6 bg-green-tertiary font-secondary py-2 text-white">
        <p className="text-sm">
          © 2024 AMZ Autopeças. Todos os direitos reservados.
        </p>
        {/* <p className="text-sm">
          Site desenvolvido por{" "}
          <Link href="mailto:slsoluttions@gmail.com">S&L Solutions</Link>
        </p> */}
      </div>
    </section>
  );
}



