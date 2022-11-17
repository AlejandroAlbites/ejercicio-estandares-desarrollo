import getCakes from "./Ejercicio15";

describe("Test exercise 15", () => {
  it("should return a string with 20 cakes if Kayo is not sick", async () => {
    const cakes = 20;
    const res = await getCakes(false);
    expect(res).toBe(`Kayo no esta enferma, nos va preparar ${cakes} tortas`);
  });

  it("should return a string with 0 cakes if Kayo is sick", async () => {
    const cakes = 0;
    try {
      await getCakes(true);
    } catch (error) {
      expect(error).toBe(
        `Kayo esta enferma, la cantidad de tortas sera ${cakes}, pero igual habrá fiesta`
      );
    }
  });
});
