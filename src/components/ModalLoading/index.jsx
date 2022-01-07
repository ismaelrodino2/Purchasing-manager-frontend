import Spinner from "components/Spinner";
import React from "react";
import * as Styled from "./styles";

export const ModalLoading = () => {
    return(
        <div>
            <Styled.Modal>
                <Styled.ModalContent>
                    <Spinner />
                </Styled.ModalContent>
            </Styled.Modal>
        </div>
    )
}