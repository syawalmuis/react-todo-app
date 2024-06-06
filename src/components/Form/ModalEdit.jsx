import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Input from "./Input";

function ModalEdit({
    isOpen,
    setIsOpen,
    editedTodo = "",
    title = "",
    updateTodos,
}) {
    const onSubmit = (event) => {
        event.preventDefault();
        const { value: text } = event.target.querySelector("input");
        updateTodos(editedTodo.id, { ...editedTodo, text });
        setIsOpen(false);
    };
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative w-full z-50"
        >
            <div className="fixed inset-0 flex w-screen bg-black/80 items-center justify-center p-4">
                <DialogPanel className="max-w-lg w-full rounded-sm space-y-4 border bg-white p-12">
                    {title && (
                        <DialogTitle className="font-bold">{title}</DialogTitle>
                    )}
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div>
                            <Input
                                defaultValue={editedTodo?.text}
                                className={"w-full"}
                            />
                        </div>
                        <div className="flex gap-1 justify-end ps-0.5">
                            <button
                                onClick={() => setIsOpen(false)}
                                type="button"
                                className="bg-red-600 text-light-gray px-2 py-1 text-xs font-medium shadow-sm"
                            >
                                Cancel
                            </button>
                            <button className="bg-dark-gray text-white px-2 py-1 text-xs font-medium shadow-sm">
                                Save
                            </button>
                        </div>
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default ModalEdit;
