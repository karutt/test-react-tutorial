"use client";

import { Button, Center, HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";

import { Board } from "./Board";
import HistoryTable from "./HistoryTable";

// ゲーム全体を管理するコンポーネント
export function Game() {
    const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState<boolean>(false);
    const [history, setHistory] = useState<Array<Array<string | null>>>([squares]);

    const handlePlay = (newSquares: Array<string | null>) => {
        setSquares(newSquares);
        setXIsNext(!xIsNext);
        setHistory((prev) => [...prev, newSquares]);
    };

    const jumpTo = (nextMove: number) => {
        const newHistory = history.slice(0, nextMove + 1);
        setHistory(newHistory);
        setSquares(newHistory[newHistory.length - 1]);
        setXIsNext(newHistory.length % 2 === 0);
    };

    return (
        <Center h='100vh'>
            <VStack alignItems='end'>
                <HStack gap={6}>
                    <Board squares={squares} xIsNext={xIsNext} onPlay={handlePlay} />
                    <HistoryTable history={history} jumpTo={jumpTo} />
                </HStack>
                <Link href='/' passHref>
                    <Button variant='plain' gap={1}>
                        <MdOutlineArrowBack />
                        Home
                    </Button>
                </Link>
            </VStack>
        </Center>
    );
}
