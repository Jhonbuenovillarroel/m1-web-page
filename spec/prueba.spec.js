import { Activity, Repository } from "../scripts/usefulClasses.js";

describe("La clase Activity", () => {
  it("Activity debe ser una clase", () => {
    expect(typeof Activity.prototype.constructor === "function").toBeTrue();
  });
});

describe("La clase Repository", () => {
  it("Repository debe ser una clase", () => {
    expect(typeof Activity.prototype.constructor).toBe("function");
  });

  it("Repository debe tener definido un método getAllActivities", () => {
    expect(Repository.prototype.getAllActivities).toBeDefined();
  });

  it("Repository debe tener un método createActivity definido", () => {
    expect(Repository.prototype.createActivity).toBeDefined();
  });

  it("Repository debe tener un método deleteActivity definido", () => {
    expect(Repository.prototype.deleteActivity).toBeDefined();
  });

  it("El método getAllActivities debe devolver un array con las actividades", () => {
    const newRepository = new Repository();

    expect(newRepository.getAllActivities()).toEqual([]);

    const activity1 = newRepository.createActivity({
      id: crypto.randomUUID(),
      title: "Estudiar",
      description: "Estudiar nuevas tecnologías",
      imgUrl: "https://imagenes.com/imagen",
    });
    const activity2 = newRepository.createActivity({
      id: crypto.randomUUID(),
      title: "Estudiar",
      description: "Estudiar nuevas tecnologías",
      imgUrl: "https://imagenes.com/imagen",
    });
    const activity3 = newRepository.createActivity({
      id: crypto.randomUUID(),
      title: "Estudiar",
      description: "Estudiar nuevas tecnologías",
      imgUrl: "https://imagenes.com/imagen",
    });

    expect(newRepository.getAllActivities()).toEqual([
      activity1,
      activity2,
      activity3,
    ]);
  });

  it("El método createActivity debe crear una nueva actividad y agregarla a las actividades existentes", () => {
    const newRepository = new Repository();

    const activity1 = newRepository.createActivity({
      id: crypto.randomUUID(),
      title: "Estudiar",
      description: "Estudiar nuevas tecnologías",
      imgUrl: "https://imagenes.com/imagen",
    });

    expect(newRepository.activities).toEqual([activity1]);

    const activity2 = newRepository.createActivity({
      id: crypto.randomUUID(),
      title: "Estudiar",
      description: "Estudiar nuevas tecnologías",
      imgUrl: "https://imagenes.com/imagen",
    });
    const activity3 = newRepository.createActivity({
      id: crypto.randomUUID(),
      title: "Estudiar",
      description: "Estudiar nuevas tecnologías",
      imgUrl: "https://imagenes.com/imagen",
    });

    expect(newRepository.activities).toEqual([activity1, activity2, activity3]);
  });

  it("El método deleteActivity debe eliminar la tarea seleccionada en cualquier posición del array activities", () => {
    const newRepository = new Repository();

    const activity1 = newRepository.createActivity({
      id: crypto.randomUUID(),
      title: "Estudiar",
      description: "Estudiar nuevas tecnologías",
      imgUrl: "https://imagenes.com/imagen1",
    });

    const activity2 = newRepository.createActivity({
      id: crypto.randomUUID(),
      title: "Estudiar",
      description: "Estudiar nuevas tecnologías",
      imgUrl: "https://imagenes.com/imagen2",
    });
    const activity3 = newRepository.createActivity({
      id: crypto.randomUUID(),
      title: "Estudiar",
      description: "Estudiar nuevas tecnologías",
      imgUrl: "https://imagenes.com/imagen3",
    });

    const id = newRepository.activities[1].id;

    newRepository.deleteActivity(id);

    expect(newRepository.getAllActivities()).toEqual([true, false, true]);
  });
});
