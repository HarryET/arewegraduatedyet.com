import Head from 'next/head'
import data from "../public/data.json";

const toGrade = (score: number) => {
  if (score >= 90) return "A*"
  if (score >= 80) return "A"
  if (score >= 70) return "B"
  if (score >= 60) return "C"
  if (score >= 50) return "D"
  if (score >= 40) return "E"
  if (score >= 30) return "F"
  return "U"
}

const average = (numbers: number[]) => {
  return numbers.reduce((a, b) => a + b) / numbers.length
}

export async function getStaticProps(_context: any) {
  return {
    props: {
      subjects: data
    },
  }
}

type Subject = {
  id: string,
  name: string,
  scores: number[]
}

const Home = ({ subjects }: { subjects: Subject[] }) => {
  return (
    <>
      <Head>
        <title>Are We Graduated Yet?</title>
        <meta name="description" content="Website to track when HarryET has graduated with his A-Levels" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"w-full h-full flex flex-col space-y-8"}>
        <div className="w-full bg-red-400">
          <h1 className='text-6xl text-white font-bold px-16 py-6'>No.</h1>
        </div>
        <div className='flex flex-col text-gray-900 ml-16 space-y-4'>
          <h2 className="text-2xl font-semibold">Average Grades</h2>
          <div className='w-full items-start flex flex-col space-y-2'>
            {subjects.map((subject) => (
              <div key={subject.id} className='justify-center items-center flex flex-row space-x-6'>
                <p className='text-xl'>{subject.name}</p>
                <p>{toGrade(average(subject.scores))} <span className='text-gray-500'>({average(subject.scores)})</span></p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;
