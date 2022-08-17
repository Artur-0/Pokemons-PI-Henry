import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, postPokemon } from "../../Redux/Actions/actions";

function Create() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, []);
  const types = useSelector((state) => state.types);
  const [error, setError] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    types: [],
    image: "",
    health: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });
  const validate = (attribute, value) => {
    if (attribute === "name") {
      setInputs({
        ...inputs,
        name: value,
      });
      if (!/^[A-Za-z\s]*$/.test(value)) {
        setError("only letters please...");
      }
      if (/^[A-Za-z\s]*$/.test(value)) {
        setError("");
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postPokemon(inputs));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={inputs.name}
          placeholder="name"
          onChange={(e) => validate("name", e.target.value)}
        />
        {error && <p>{error}</p>}
        <label>Health:</label>
        <input
          type="number"
          placeholder="health"
          onChange={(e) =>
            setInputs({
              ...inputs,
              health: e.target.value,
            })
          }
        />
        <label>Speed:</label>
        <input
          type="number"
          placeholder="speed"
          onChange={(e) =>
            setInputs({
              ...inputs,
              speed: e.target.value,
            })
          }
        />
        <label>Attack:</label>
        <input
          type="number"
          placeholder="attack"
          onChange={(e) =>
            setInputs({
              ...inputs,
              attack: e.target.value,
            })
          }
        />
        <label>Defense:</label>
        <input
          type="number"
          placeholder="defense"
          onChange={(e) =>
            setInputs({
              ...inputs,
              defense: e.target.value,
            })
          }
        />
        <label>Height:</label>
        <input
          type="number"
          placeholder="height"
          onChange={(e) =>
            setInputs({
              ...inputs,
              height: e.target.value,
            })
          }
        />
        <label>Weight:</label>
        <input
          type="number"
          placeholder="weight"
          onChange={(e) =>
            setInputs({
              ...inputs,
              weight: e.target.value,
            })
          }
        />
        <label>Types:</label>
        {types.map((t) => {
          return (
            <div key={t.id}>
              <label> {t.name}</label>
              <input
                type="checkbox"
                onChange={(e) =>
                  e.target.checked
                    ? setInputs({
                        ...inputs,
                        types: [...inputs.types, t.name],
                      })
                    : setInputs({
                        ...inputs,
                        types: inputs.types.filter((el) => el !== t.name),
                      })
                }
              />
            </div>
          );
        })}

        <input
          type="submit"
          value="Create"
          // disabled={disabled}
          onSubmit={() =>
            handleSubmit(
              inputs.name,
              inputs.speed,
              inputs.health,
              inputs.attack,
              inputs.defense,
              inputs.height,
              inputs.weight,
              inputs.types
            )
          }
        />
      </form>
    </div>
  );
}

export default Create;

// Un formulario controlado con JavaScript con los campos mencionados en el detalle del Pokemon
// [ ] Posibilidad de seleccionar/agregar más de un tipo de Pokemon
// [ ] Botón/Opción para crear un nuevo Pokemon
// Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre del Pokemon no pueda contener caracteres numéricos, que la altura no pueda ser superior a determinado valor, etc.
