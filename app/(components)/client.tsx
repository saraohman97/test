"use client";

import { Wine } from "@prisma/client";

interface WinesProps {
  wines: Wine[];
}

const WinesPage: React.FC<WinesProps> = ({ wines }) => {
  return (
    <div>
      {wines.length ? (
        wines?.map((wine) => <div key={wine.id}>{wine.name}</div>)
      ) : (
        <div>Inga viner</div>
      )}
    </div>
  );
};

export default WinesPage;
