import { customButtonRecipe, iconButtonRecipe } from "@/shared/components/molecules/buttonRecipes";
import {
    Button,
    Dialog,
    CloseButton,
} from "@chakra-ui/react";
import { FC } from "react";
import TodoDraftForm from "./TodoDraftForm";
import DraftProvider from "../../providers/draft/DraftProvider";


type TodoDraftDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const TodoDraftDialog: FC<TodoDraftDialogProps> = ({
    open,
    onOpenChange,
}) => {
    return (
        <Dialog.Root open={open} onOpenChange={(e) => onOpenChange(e.open)}>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content maxW="lg" bg={"bg"} shadow={"none"} maxWidth={"700px"}>
                    <Dialog.CloseTrigger />

                    <Dialog.Body>
                        <DraftProvider>
                            <TodoDraftForm />
                        </DraftProvider>
                    </Dialog.Body>

                    <Dialog.CloseTrigger asChild {...iconButtonRecipe({ size: "lg", })}>
                        <CloseButton size="sm" color={"currentcolor"} />
                    </Dialog.CloseTrigger>
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    );
};





