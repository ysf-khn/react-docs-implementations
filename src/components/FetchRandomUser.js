import { useState, useEffect } from "react";

const FetchRandomUser = () => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState("");

  const fetchData = async function () {
    const fetchh = await fetch("https://api.randomuser.me/");
    const data = await fetchh.json();
    setPerson(data.results[0]);
    setLoading(false);
  };

  useEffect(() => fetchData(), []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <p>
            {person.name.first} {person.name.last}
          </p>
          <div>{person.gender.toUpperCase()}</div>
        </>
      )}
    </div>
  );
};

export default FetchRandomUser;
