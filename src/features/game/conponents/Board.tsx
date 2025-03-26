import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import { calculateWinner } from "../utils/calculateWinner";
import { Square } from "./Square";

interface BoardProps {
    squares: Array<string | null>;
    xIsNext: boolean;
    onPlay: (newSquares: Array<string | null>) => void;
}

export function Board({ squares, xIsNext, onPlay }: BoardProps) {
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
        <Center bg='bg.muted' borderRadius='lg' h={360} w={360}>
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
            </VStack>
        </Center>
    );
}
