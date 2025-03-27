import { Center, HStack, IconButton, Text, VStack } from "@chakra-ui/react";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { RiResetLeftLine } from "react-icons/ri";
import { calculateWinner } from "../utils/calculateWinner";
import { Square } from "./Square";
interface BoardProps {
    squares: Array<string | null>;
    xIsNext: boolean;
    onPlay: (newSquares: Array<string | null>) => void;
    handleNext: () => void;
    handlePrev: () => void;
    handleReset: () => void;
    popHistoryIsEmpty: boolean;
    historyIsEmpty: boolean;
}

export function Board({
    squares,
    xIsNext,
    onPlay,
    handleNext,
    handlePrev,
    handleReset,
    popHistoryIsEmpty,
    historyIsEmpty,
}: BoardProps) {
    function handleClick(i: number) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const squaresCopy = squares.slice();
        squaresCopy[i] = xIsNext ? "X" : "O";
        onPlay(squaresCopy);
    }

    const cnt = squares.reduce((acc, cur) => (cur ? acc + 1 : acc), 0);

    const winner = calculateWinner(squares);
    const status = winner
        ? `Winner: ${winner}`
        : cnt === 9
          ? "Draw!"
          : `Next player: ${xIsNext ? "X" : "O"}`;

    return (
        <Center bg='bg.muted' borderRadius='lg' h={360} w={{ base: "100%", md: 360 }}>
            <VStack gap={2}>
                <Text>{status}</Text>
                <VStack gap={0}>
                    {[0, 1, 2].map((x) => (
                        <HStack key={x} gap={0}>
                            {[0, 1, 2].map((y) => (
                                <Square
                                    key={y}
                                    value={squares[x * 3 + y]}
                                    onSquareClick={() => handleClick(x * 3 + y)}
                                />
                            ))}
                        </HStack>
                    ))}
                </VStack>
                <HStack mt={4}>
                    <IconButton
                        variant='outline'
                        size='sm'
                        onClick={handlePrev}
                        disabled={historyIsEmpty}>
                        <FiArrowLeft />
                    </IconButton>
                    <IconButton
                        variant='outline'
                        disabled={popHistoryIsEmpty}
                        size='sm'
                        onClick={handleNext}>
                        <FiArrowRight />
                    </IconButton>
                    <IconButton variant='outline' size='sm' onClick={handleReset}>
                        <RiResetLeftLine />
                    </IconButton>
                </HStack>
            </VStack>
        </Center>
    );
}
