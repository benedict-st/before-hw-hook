import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <SpisokComponent>
            <Component/>
            <Component/>
            <Component/>
            </SpisokComponent>
        </CollapseWrapper>
    );
};
const SpisokComponent = ({ children }) => {
let number = 0;
    return React.Children.map(children, (child) => {
        number++;
        return <div> {number} {child} </div>;
});
};
const Component = () => {
    return (
        <>
            <div> Компонент списка</div>
        </>
    );
};
   // const field = <Component/>;

export default ChildrenExercise;
