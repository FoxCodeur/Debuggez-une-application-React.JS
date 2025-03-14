import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./index";
// Le premier test vérifie que les éléments essentiels (les liens et le
// logo) sont bien affichés dans le menu.
describe("When Menu is created", () => {
  it("a list of mandatories links and the logo are displayed", async () => {
    render(<Menu />);
    await screen.findByText("Nos services");
    await screen.findByText("Nos réalisations");
    await screen.findByText("Notre équipe");
    await screen.findByText("Contact");
  });
  // Le deuxième test vérifie que l'URL change correctement lorsqu'un
  // utilisateur clique sur le bouton "Contact".
  describe("and a click is triggered on contact button", () => {
    it("document location  href change", async () => {
      render(<Menu />);
      fireEvent(
        await screen.findByText("Contact"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      expect(window.document.location.hash).toEqual("#contact");
    });
  });
});
