import * as Yup from "yup";

export const valoresiniciales = ()=>{
    return{
        email:"",
        password: "",
    };
};

export const validationSchema= () => {
    return Yup.object({
        email: Yup.string()
        .email("El imail no es correcto")
        .required("El imail es obligatorio"),
        password: Yup.string(). required("La contraseña es obligatoria"),
    });
};