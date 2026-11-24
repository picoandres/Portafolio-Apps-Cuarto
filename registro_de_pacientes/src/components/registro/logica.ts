import { $, useStore, useVisibleTask$ } from "@builder.io/qwik";

export interface Paciente {
  nombre: string;
  cedula: string;
  telefono: string;
  sangre: string;
}

export const usePacientes = () => {
  const estado = useStore({
    nombre: "",
    cedula: "",
    telefono: "",
    sangre: "",
    error: "",
    editando: -1,
    pacientes: [] as Paciente[],
  });

  // Cargar pacientes guardados en localStorage
  useVisibleTask$(() => {
    const guardado = localStorage.getItem("pacientes");

    if (guardado) {
      estado.pacientes = JSON.parse(guardado);
    }
  });

  // Limpiar formulario
  const limpiar = $(() => {
    estado.nombre = "";
    estado.cedula = "";
    estado.telefono = "";
    estado.sangre = "";
    estado.error = "";
    estado.editando = -1;
  });

  // Registrar o actualizar paciente
  const registrar = $(() => {
    if (
      !estado.nombre.trim() ||
      !/^\d{10}$/.test(estado.cedula) ||
      !/^\d{10}$/.test(estado.telefono) ||
      !estado.sangre
    ) {
      estado.error =
        "Complete todos los campos: nombre, cédula, teléfono y tipo de sangre";
      return;
    }

    const paciente: Paciente = {
      nombre: estado.nombre.trim(),
      cedula: estado.cedula,
      telefono: estado.telefono,
      sangre: estado.sangre,
    };

    if (estado.editando >= 0) {
      estado.pacientes[estado.editando] = paciente;
    } else {
      estado.pacientes.push(paciente);
    }

    localStorage.setItem(
      "pacientes",
      JSON.stringify(estado.pacientes)
    );

    limpiar();
  });

  // Editar paciente
  const editar = $((i: number) => {
    const paciente = estado.pacientes[i];

    if (!paciente) return;

    estado.nombre = paciente.nombre;
    estado.cedula = paciente.cedula;
    estado.telefono = paciente.telefono;
    estado.sangre = paciente.sangre;
    estado.error = "";
    estado.editando = i;
  });

  // Eliminar paciente
  const eliminar = $((i: number) => {
    estado.pacientes.splice(i, 1);

    localStorage.setItem(
      "pacientes",
      JSON.stringify(estado.pacientes)
    );

    limpiar();
  });

  return {
    estado,
    registrar,
    editar,
    eliminar,
    limpiar,
  };
};