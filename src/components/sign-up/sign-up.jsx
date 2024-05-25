
import { Button } from "../button/button";
import { FormImput } from "../form-input/form-input";


export function SignUp() {


    return (
        <div>
            <h2>Criar conta</h2>
            <form action="">

                <FormImput
                    label="Nome"
                    type="text"
                    requeried
                    name="nome"
                    placeholder="Digite seu nome"
                    autocomplete="off"

                />

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
                <FormImput
                    label="Conf. Senha"
                    type="password"
                    requeried
                    name="confSenha"
                    placeholder="Confirme sua senha"
                />

                <Button type="submit">
                    Criar conta
                </Button>


            </form>
        </div>
    )

}