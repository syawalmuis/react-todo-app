import { Fragment, useState } from "react";
import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Select({ options, onChange, selected }) {
    return (
        <Listbox value={selected} onChange={(option) => onChange(option)}>
            {({ open }) => (
                <>
                    <div className="relative">
                        <ListboxButton className="relative w-full cursor-default rounded-md bg-transparent pl-3 pr-10 text-right text-dark-gray  focus:outline-none sm:text-sm sm:leading-6 flex justify-end">
                            <span className="flex items-center">
                                <span className="ml-3 block  font-medium truncate">
                                    {selected.text}
                                </span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-500"
                                    aria-hidden="true"
                                />
                            </span>
                        </ListboxButton>

                        <Transition
                            show={open}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full min-w-max overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {options.map((option) => (
                                    <ListboxOption
                                        key={option.id}
                                        className={({ focus }) =>
                                            classNames(
                                                focus
                                                    ? "bg-primary !text-light-gray"
                                                    : "",
                                                !focus ? "text-gray-900" : "",
                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                        }
                                        value={option}
                                    >
                                        {({ selected, focus }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? "font-semibold text-primary"
                                                                : "font-normal",
                                                            focus
                                                                ? "!text-light-gray"
                                                                : "",
                                                            "ml-3 block truncate"
                                                        )}
                                                    >
                                                        {option.text}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            focus
                                                                ? "text-white"
                                                                : "text-primary",
                                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                                        )}
                                                    >
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
}
