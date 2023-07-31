import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Box, Container, Row } from "@/components/globals";
import Page from "@/components/globals/Page";

const inter = Inter({ subsets: ["latin"] });

const people = [
  {
    name: "Mical Johnson",
    role: "The Chief",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2H2H26pZIfhD0Gt23MiTnZH4VktO3yz-zc54wH-Jb7v_qd7sG1JJ5RZqeQAPpXVZXTQ&usqp=CAU",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  {
    name: "The Moose",
    role: "The Nerd",
    imageUrl:
      "https://twinfinite.net/wp-content/uploads/2021/12/Big-Bang-Theory.jpeg?fit=1200%2C675",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  {
    name: "Joane Clarino",
    role: "Thrive Architect",
    imageUrl:
      "https://img.huffingtonpost.com/asset/6340585c2500003a004f7410.jpeg?cache=mGKk1tDjZH&ops=scalefit_720_noupscale",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  {
    name: "Maccy",
    role: "The Designer",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Simon_Helberg_at_PaleyFest_2013.jpg",
    bio: "Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.",
  },
  // More people...
];

export default function Team() {
  return (
    <>
      <Head>
        <title>Next Page Template</title>
        <meta name="description" content="This is the demo page" />
      </Head>
      {/* <Container className={"border border-gray-500"} FULL={false}> */}
      <Page className={""} FULL={false}>
        {/* <div className="bg-white py-24 sm:py-32"> */}
        <div className="bg-white py-5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet our leadership
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We’re a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
            >
              {people.map((person) => (
                <li
                  key={person.name}
                  className="flex flex-col gap-6 xl:flex-row"
                >
                  <img
                    className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="flex-auto">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-base leading-7 text-gray-600">
                      {person.role}
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {person.bio}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Page>
    </>
  );
}
