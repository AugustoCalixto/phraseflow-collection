import React from 'react';
import Image from 'next/image';

import  MapImg  from '../../public/images/map.png';
import StundentImg from '../../public/images/student.png';
import StudentsImg from '../../public/images/students.png';

export default function Home() {
  return (
    <main className="bg-gray-100">
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Aprenda Novos Idiomas e Explore Novos Horizontes!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Você já sonhou em explorar novos lugares, conhecer pessoas de diferentes culturas e desfrutar de experiências únicas? Aprender um novo idioma é o seu passaporte para o mundo! No nosso sistema de aprendizado de idiomas, oferecemos uma abordagem dinâmica e envolvente para ajudá-lo a dominar diversos idiomas de forma eficaz. Seja para viagens, carreira, estudos ou apenas por diversão, estamos aqui para guiar você nessa jornada emocionante.
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Comece sua jornada agora!
            </button>
          </div>
          <div className="mt-10">
            <Image
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={MapImg}
              alt="Mapa mundi colorido representando todos os países do mundo"
            />
          </div>
        </div>

        <div className="mt-16 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mt-10">
            <Image
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={StundentImg}
              alt="Estudante sorrindo"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Potencialize sua Comunicação e Expanda suas Oportunidades!
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Dominar um novo idioma não é apenas uma habilidade, é um superpoder! Comunicar-se em diferentes idiomas abre portas para novas oportunidades e conecta você a um mundo de possibilidades. Nosso sistema de aprendizado de idiomas foi projetado para capacitá-lo, ajudando-o a conquistar o sucesso, seja expandindo sua carreira, fazendo amigos internacionais ou simplesmente tornando suas viagens mais memoráveis. Desperte seu superpoder da comunicação conosco.
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Veja um mundo de possibilidades!
            </button>
          </div>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Aprendizado Divertido, Resultados Duradouros
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Aprender um novo idioma não precisa ser chato ou complicado. Nossas aulas são projetadas para serem divertidas, interativas e envolventes. Com instrutores apaixonados e materiais de alta qualidade, você verá como o aprendizado pode ser uma experiência enriquecedora. Além disso, nosso sistema permite que você aprenda no seu próprio ritmo, garantindo que os resultados sejam duradouros. Prepare-se para descobrir a alegria de se tornar fluente em um novo idioma enquanto se diverte!
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Aprenda se divertindo!
            </button>
          </div>
          <div className="mt-10">
            <Image
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={StudentsImg}
              alt="Estudantes em uma aula de idioma sorrindo"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
