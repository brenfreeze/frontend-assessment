import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import "./AccordionsTabs.styles.scss";

type TabsData = {
  title: string;
  content: string;
};

export async function loader() {
  const res = await fetch("/data.json");

  return res.json();
}

function AccordionsTabs() {
  const data = useLoaderData() as TabsData[];
  const [active, setActive] = useState<number>(0);

  const toggleActive = (index: number) => {
    if (active === index) return setActive(-1);
    setActive(index);
  };

  return (
    <div className="accordions-tabs">
      <div className="accordions-tabs__grid">
        {data.map((tab, index) => (
          <div key={index} className="accordions-tabs__tab">
            <button
              className={`accordions-tabs__button ${
                active === index ? "accordions-tabs__button--active" : ""
              }`}
              onClick={() => toggleActive(index)}
            >
              <h3 className="accordions-tabs__title">{tab.title}</h3>
            </button>
            <div className="accordions-tabs__content-wrapper">
              <div className="accordions-tabs__content">
                <p dangerouslySetInnerHTML={{ __html: tab.content }}></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccordionsTabs;
