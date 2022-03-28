import { React } from "react";
import { useSelector } from "react-redux";
import { styles } from ".";
import { getPlanetDetailsState } from "../../features/planets/planetsSlice";
import planete from "../../assets/planete.png";
import { Button } from "reactstrap";

export const PlanetDetails = () => {
  const planetDetails = useSelector(getPlanetDetailsState);

  return (
    <main className={styles.main}>
      <div className={styles.cardContainer}>
        <img alt="planeta" src={planete} width="500" height="600" />
        <Button color="danger">Danger!</Button>
        {/* <Image src={planetDetails} width={250} height={250} /> */}
        {planetDetails && (
          <>
            <h3>{planetDetails.name}</h3>
            <div className={`${styles.property}`}>
              <h4>Details</h4>
              {
                <ul>
                  <li>
                    Climate -{" "}
                    <strong style={{ color: "red" }}>
                      {planetDetails.climate}
                    </strong>
                  </li>
                  <li>
                    Diameter -{" "}
                    <strong style={{ color: "red" }}>
                      {planetDetails.diameter}
                    </strong>
                  </li>
                  <li>
                    Gravity -{" "}
                    <strong style={{ color: "red" }}>
                      {planetDetails.gravity}
                    </strong>
                  </li>
                  <li>
                    Orbital Period -{" "}
                    <strong style={{ color: "red" }}>
                      {planetDetails.orbital_period}
                    </strong>
                  </li>
                  <li>
                    Population -{" "}
                    <strong style={{ color: "red" }}>
                      {planetDetails.population}
                    </strong>
                  </li>
                  <li>
                    Rotation Period -{" "}
                    <strong style={{ color: "red" }}>
                      {planetDetails.rotation_period}
                    </strong>
                  </li>
                  <li>
                    Surface Water -{" "}
                    <strong style={{ color: "red" }}>
                      {planetDetails.surface_water}
                    </strong>
                  </li>
                  <li>
                    Terrain -{" "}
                    <strong style={{ color: "red" }}>
                      {planetDetails.terrain}
                    </strong>
                  </li>
                </ul>
              }
            </div>
          </>
        )}
      </div>
      <button
        type="button"
        style={{ marginTop: "1rem" }}
        className={`${styles.button} ${styles.primary}`}
        // onClick={() => router.back()}
      >
        Back to Home
      </button>
    </main>
  );
};
