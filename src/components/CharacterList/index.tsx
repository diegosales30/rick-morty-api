import characterApi from "../../store/features/characterSlice";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Image from "next/image";

import styles from "./styles.module.scss";

function CharacterList() {
  const { count } = useSelector((state: RootState) => state.nextpage);
  const { data } = characterApi.useGetCharacterQuery(count);
  const character = data?.results;

  return (
    <section className={styles.container}>
      {character?.map((item) =>
        item.status === "Dead" ? (
          <ul key={item.id} className={styles.containerListdead}>
            <li>
              <h2>{item.name.toUpperCase()}</h2>
              <Image
                width={"250px"}
                height={"250px"}
                src={item.image}
                alt={item.name}
              />
              <p>{item.species}</p>
              <p>status: Morto</p>
              <p>
                gênero:{" "}
                {item.gender === "Male"
                  ? "Masculino"
                  : "Female"
                  ? "Feminino"
                  : "unknown"}
              </p>
            </li>
          </ul>
        ) : (
          <ul key={item.id} className={styles.containerListalive}>
            <li>
              <h2>{item.name.toUpperCase()}</h2>
              <Image
                width={"250px"}
                height={"250px"}
                src={item.image}
                alt={item.name}
              />
              <p>{item.species}</p>
              <p>status: Vivo</p>
              <p>
                gênero:{" "}
                {item.gender === "Male"
                  ? "Masculino"
                  : "Female"
                  ? "Feminino"
                  : "unknown"}
              </p>
            </li>
          </ul>
        )
      )}
    </section>
  );
}

export default CharacterList;
