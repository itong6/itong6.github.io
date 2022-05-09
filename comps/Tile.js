// Premade components
import Image from "next/image";
import styled, {keyframes} from 'styled-components';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// My components
import Continue from "./Continue";
import TaskBar from "./Tasks";

// Data
import { animals, changeAnimal, changeWeapon, chWeapons, copiWeapons, getAnimal, getWeapon } from '../data/selection';
import { fadeIn, fadeOut } from "../data/animation";

// --------------------
//  STYLING STARTS HERE
// --------------------
const TileContainer = styled.div`
  text-align: center;
  ${'' /* outline: 2px solid red; */}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-content: center;
  width: 400px;
  margin: 0 auto;

  .tile {
    ${'' /* outline: 2px solid blue; */}
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 20px;
    background: white;
    color: #333333;
    width: 120px;
    height: 120px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    margin-bottom: 2rem;
  }
  .tile:hover {
    cursor: pointer;
    color: red;
    transition: 0.3s;
    box-shadow: 0 14px 28px rgba(255,0,0,0.25), 0 10px 10px rgba(255,0,0,0.22);


    .imgCont {
    filter: brightness(100%);
    transition: 0.3s;
    }
  }
  .tile:active {
    position: relative;
    top: 2px;
  }

  .titleCont {
    display: block;
    text-align: center;
    padding: 0.25rem -0.25rem 0.25rem;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
  }

  .imgCont {
    width: 44px;
    height: 44px;
    position: relative;
    margin: 8px auto;
    padding: 2rem;
    filter: brightness(10%);
  }
`

const DescCont = styled.div`
  ${'' /* outline: 2px solid red; */}
  width: 400px;
  margin: 0 auto;

  h2 {
    margin: 0;
    margin-top: 16px;
    font-size: 6rem;
    text-align: right;
  }
`

const Select = styled.p`
  text-align: center;
  font-size: 16px;
  font-style: italic;
  opacity: 70%;
  margin-top: 4rem;
`;

// ----------------
// PAGE STARTS HERE
// ----------------
export default function Tile() {

  const r = useRouter();
  const [animal, setAnimals] = useState("");
  const [weapon, setWeapons] = useState("")
  const [words, setWords] = useState("");
  const a = getAnimal();
  const w = getWeapon()

  if (r.asPath === "/") {
    if (a.length === 0) {
      return <div>
        <Select>
          Select an animal.
        </Select>
        <TileContainer>
          {animals.map((o, i) =>
            <div className="tile" key={i} onClick={() => {
              setAnimals(o.title);
              setWords(o.desc);
              animalSelection(o.title);
            }}>
              <div className="titleCont">
                {o.title}
              </div>
              <div className="imgCont">
                <Image src={o.img} layout="fill" objectFit="contain" />
              </div>
            </div>
          )}
        </TileContainer>
        <DescCont>
          <h2>{animal}</h2>
          <p>{words}</p>
        </DescCont>
      </div>
    } else {
      return <div>
        <Select>
          Select an animal.
        </Select>
        <TileContainer>
          {animals.map((o, i) =>
            <div className="tile" key={i} onClick={() => {
              setAnimals(o.title);
              setWords(o.desc);
              animalSelection(o.title);
            }}>
              <div className="titleCont">
                {o.title}
              </div>
              <div className="imgCont">
                <Image src={o.img} layout="fill" objectFit="contain" />
              </div>
            </div>
          )}
        </TileContainer>
        <DescCont>
          <h2>{animal}</h2>
          <p>{words}</p>
        </DescCont>
        <Continue />
      </div>
    }
    } else if (r.asPath === "/weapons") {
        if (a === "Chicken") {
            return <div>
              <Select>
                Select a weapon.
              </Select>
              <TileContainer>
                {chWeapons.map((o, i) =>
                  <div className="tile" key={i} onClick={() => {
                    setWeapons(o.title);
                    setWords(o.desc);
                    weaponSelection(o.title);
                  }}>
                    <div className="titleCont">
                      {o.title}
                    </div>
                    <div className="imgCont">
                      <Image src={o.img} layout="fill" objectFit="contain" />
                    </div>
                  </div>
                )}
              </TileContainer>
              <DescCont>
                <h3>{weapon}</h3>
                <p>{words}</p>
              </DescCont>
            </div>
          } else {
            return <div>
              <Select>
                Select a weapon.
              </Select>
              <TileContainer>
                {copiWeapons.map((o, i) =>
                  <div className="tile" key={i} onClick={() => {
                    setWeapons(o.title);
                    setWords(o.desc);
                    weaponSelection(o.title);
                  }}>
                    <div className="titleCont">
                      {o.title}
                    </div>
                    <div className="imgCont">
                      <Image src={o.img} layout="fill" objectFit="contain" />
                    </div>
                  </div>
                )}
              </TileContainer>
              <DescCont>
                <h2>{weapon}</h2>
                <p>{words}</p>
              </DescCont>
            </div>
    }
  }
}

// Functions start here
export function animalSelection(a) {
  changeAnimal(a);
}

export function weaponSelection(w) {
  changeWeapon(w);
}