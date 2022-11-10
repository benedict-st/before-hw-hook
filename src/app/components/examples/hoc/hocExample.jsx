import React from "react";
import Component from "./someComponent";
// import UserMeta from "./hocPrimerUser";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import withPropsStyles from "./withPropsStyle";
// import withQuery from "./withQuery";
import SimpleComponent from "./simpleComponent";
import { withFunctions } from "./withFunctions";
const HOCExample = () => {
const ComponentWithLogin = withLogin(Component);
const ComponentWithPropsStyle = withPropsStyles(Component);
const NewComponent = withPropsStyles(ComponentWithLogin);
const ComponentWithHoc = withFunctions(SimpleComponent);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWithLogin />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <ComponentWithPropsStyle />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <NewComponent />
                <Divider />
                <Divider />
                <ComponentWithHoc />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
