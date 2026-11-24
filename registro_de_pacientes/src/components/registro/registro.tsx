import { component$, useStyles$ } from "@builder.io/qwik";
import estilos from "./registro.css?inline";
import { usePacientes } from "./logica";

export default component$(() => {
  useStyles$(estilos);

  const {
    estado,
    registrar,
    editar,
    eliminar,
    limpiar,
  } = usePacientes();

  return (
    <div class="pagina">
      <div class="caja">
        <h1>Registro de pacientes</h1>

        {/* Campo: Nombre */}
        <input
          placeholder="Nombre"
          value={estado.nombre}
          onInput$={(_, el) => (estado.nombre = el.value)}
        />

        {/* Campo: Cédula */}
        <input
          type="text"
          inputMode="numeric"
          placeholder="Cédula"
          minLength={10}
          maxLength={10}
          value={estado.cedula}
          onInput$={(_, el) => {
            el.value = el.value.replace(/\D/g, "");
            estado.cedula = el.value;
          }}
        />

        {/* Campo: Teléfono */}
        <input
          type="text"
          inputMode="numeric"
          placeholder="Teléfono"
          minLength={10}
          maxLength={10}
          value={estado.telefono}
          onInput$={(_, el) => {
            el.value = el.value.replace(/\D/g, "");
            estado.telefono = el.value;
          }}
        />

        {/* Campo: Tipo de sangre */}
        <select
          value={estado.sangre}
          onChange$={(_, el) => (estado.sangre = el.value)}
        >
          <option value="">Tipo de sangre</option>

          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
            (tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            )
          )}
        </select>

        {/* Botones principales */}
        <button onClick$={registrar}>
          {estado.editando >= 0 ? "Actualizar" : "Registrar"}
        </button>

        {estado.editando >= 0 && (
          <button class="cancelar" onClick$={limpiar}>
            Cancelar
          </button>
        )}

        {/* Mensaje de error */}
        {estado.error && (
          <p class="error">{estado.error}</p>
        )}

        {/* Lista de pacientes */}
        <ul>
          {estado.pacientes.map((paciente, i) => (
            <li key={i}>
              <span>
                {paciente.nombre} - {paciente.cedula} -{" "}
                {paciente.telefono} - {paciente.sangre}
              </span>

              {/* Acciones de cada paciente */}
              <span class="acciones">
                <button
                  class="mini"
                  onClick$={() => editar(i)}
                >
                  Editar
                </button>

                <button
                  class="mini rojo"
                  onClick$={() => eliminar(i)}
                >
                  Eliminar
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});