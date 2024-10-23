import React from "react";
import { team } from "~/data";

import Image from "next/image";

const Team = () => {
  return (
    <section className={"flex w-full flex-col gap-5"}>
      <h2 className={"section-title"}>Nasz zespół</h2>
      <div className={"flex w-full flex-wrap gap-10"}>
        {team.map((member) => (
          <div key={member.id} className={"flex flex-col"}>
            <Image
              src={member.img}
              alt={member.name}
              width={200}
              height={200}
              className={"size-40 rounded-full bg-green-700"}
            />
            <h3 className={"text-center text-2xl font-bold"}>{member.name}</h3>
            <p className={"text-center text-lg"}>{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Team;
