"use client"

import { Suspense, useState } from "react";
import Introduction from "./Introduction";
import Quiz from "./Quiz";
import Match from "./Match";

export default function Content({ setImage, enData, rawData }: {setImage: any; enData: any[]; rawData: any[];}) {
  const [startQuiz, setStart] = useState(false);
  const [matchFound, setFoundMatch] = useState(false);
  const [characterMatch, setCharaMatch] = useState();

  return (
    <>
      {!startQuiz && !matchFound 
        ? <Introduction setStart={setStart} /> 
        : startQuiz && !matchFound 
        ? <Suspense fallback={<p>Loading...</p>}>
            <Quiz setImage={setImage} setCharaMatch={setCharaMatch} setFoundMatch={setFoundMatch} />
          </Suspense>
        : <Suspense fallback={<p>Loading...</p>}>
            <Match chara={characterMatch} enData={enData} rawData={rawData} setImage={setImage} />
          </Suspense>}
    </>
  )
}