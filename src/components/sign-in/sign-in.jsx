
import { Button } from "../button/button";
import { FormImput } from "../form-input/form-input";


export function SignIn() {


    return (
        <div>
            <h2>Já tem cadastro?</h2>
            <form action="">
                <FormImput
                    label="E-mail"
                    type="emeil"
                    requeried
                    name="email"
                    placeholder="Digite seu e-meil"
                    autocomplete="off"

                />

                <FormImput
                    label="Senha"
                    type="password"
                    requeried
                    name="senha"
                    placeholder="Digite sua senha"
                />

               <Button type="submit">
                Login
               </Button>
               <Button type="button" typeButton = "google">
                Login com google
               </Button>

            </form>
        </div>
    )

}