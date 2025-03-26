import React, { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  // Récupération des données depuis le contexte global
  const { data } = useData();
  // L'état local qui permet de gérer l'index de la carte actuellement affichée
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );
  const nextCard = () => {
    if (!byDateDesc?.length) return; // Vérifie que byDateDesc existe et n'est pas vide
    setTimeout(() => setIndex((index + 1) % byDateDesc.length), 5000);
  };

  useEffect(() => {
    nextCard();
  }, [index, byDateDesc]);
  // L'idée d'ajouter index et byDateDesc aux dépendances du useEffect est de
  //  s'assurer que la fonction nextCard sera réexécutée chaque fois que l'une
  //  de ces valeurs change.
  // Il est très important de spécifier les dépendances du useEffect pour
  // contrôler quand l'effet doit être exécuté. Dans ce cas, on souhaite
  //  que l'effet s'exécute lorsque l'index ou le tableau byDateDesc change.

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        // l'utilisation des clés (key) dans React doit être appliquée au plus
        // haut niveau d'un élément retourné dans une liste.
        // Les fragments (<> </>) ne peuvent pas avoir de key → Il faut utiliser
        // React.Fragment key={event.title}.
        <React.Fragment key={event.title || idx}>
          {/* <React.Fragment key={`${event.title}-${event.date}`}> */}
          <div
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  /* Dans le deuxième map, vous utilisez l'underscore (_) comme nom
                de variable pour les éléments de la liste parce que, dans ce cas,
                il n'y a pas besoin d'utiliser l'objet entier (l'élément de
                byDateDesc), mais seulement sa position dans la liste pour générer
                les éléments de pagination. Cependant, il est toujours
                possible d'utiliser n'importe quel nom pour la variable. */
                  key={_.description}
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
                  readOnly
                />
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Slider;
