import { IconButton } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { VscCircleLarge } from "react-icons/vsc";

interface SquareProps {
    value: string | null;
    onSquareClick: () => void;
}

export function Square({ value, onSquareClick }: SquareProps) {
    return (
        <IconButton
            variant='outline'
            onClick={onSquareClick}
            bg='bg.panel'
            size='2xl'
            _hover={{ bg: "bg.muted" }}
            _motionSafe={{ transition: "0s" }}
            aria-label='Square'>
            {value === "X" ? <IoMdClose size={10} /> : value === "O" ? <VscCircleLarge /> : null}
        </IconButton>
    );
}
