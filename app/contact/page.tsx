"use client";
import { useQuery } from "@tanstack/react-query";
import { FetchUserSubscriptions } from "../apiData/fetchUserSubscriptions";
import Link from "next/link";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const contact = () => {
  const subscriberId = "696fdcc6a1c250fa369a960a";

  const { data, isLoading, error } = useQuery({
    queryKey: ["subscriber", subscriberId],
    queryFn: () => FetchUserSubscriptions(subscriberId),
  });

  return (
    <section>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-400 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            We'd Love to Hear From You!
          </h2>
          <p className="mb-4">
            Have questions about our products, need help with an order, or want
            to learn more about our services? Our team is always ready to assist
            you. Feel free to reach out through any of the contact methods
            below, and we'll get back to you as soon as possible.
          </p>
          <p>
            Need immediate assistance? Give us a call during business hours and
            we'll be happy to help.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-white">
          <Link
            href="mailto:haroonch8028@gmail.com"
            className="flex items-center gap-3 w-full rounded-lg border p-4 hover:text-gray-500 transition"
          >
            <Mail className="h-5 w-5 text-blue-600" />
            <span>haroonch8028@gmail.com</span>
          </Link>

          {/* Phone */}
          <Link
            href="tel:+923085171091"
            className="flex items-center gap-3 w-full rounded-lg border p-4 hover:text-gray-500 transition"
          >
            <Phone className="h-5 w-5 text-green-600" />
            <span>0308-5171091</span>
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/923157485699"
            target="_blank"
            className="flex items-center gap-3 w-full rounded-lg border p-4 hover:text-gray-500 transition"
          >
            <MessageCircle className="h-5 w-5 text-green-500" />
            <span>0315-7485699</span>
          </Link>

          {/* Address */}
          <Link
            href="https://maps.google.com"
            target="_blank"
            className="flex items-start gap-3 w-full rounded-lg border p-4 hover:text-gray-500 transition"
          >
            <MapPin className="h-5 w-5 text-red-500 mt-1" />
            <span>
              House No. 43, Neshmaan Iqbal Housing Society,
              <br />
              Phase 1, Lahore, Pakistan
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default contact;
