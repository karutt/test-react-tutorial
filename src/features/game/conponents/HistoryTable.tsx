"use client";

import { For, Table, VStack } from "@chakra-ui/react";

interface HistoryTableProps {
    history: Array<Array<string | null>>;
    jumpTo: (move: number) => void;
}

export default function HistoryTable({ history, jumpTo }: HistoryTableProps) {
    return (
        <VStack p={4} border='solid 1px' borderColor='gray.200' borderRadius='lg' h={500}>
            <Table.Root w={220} interactive variant='outline'>
                <Table.Header>
                    <Table.Row>
                        <Table.Cell px={2} py={2} textAlign='center'>
                            ID
                        </Table.Cell>
                        <Table.Cell px={2} py={2}>
                            Move
                        </Table.Cell>
                        <Table.Cell px={2} py={2} textAlign='center'>
                            Turn
                        </Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <For each={history}>
                        {(_, move) => (
                            <Table.Row key={move} cursor={"pointer"} onClick={() => jumpTo(move)}>
                                <Table.Cell textAlign='center'>{move}</Table.Cell>
                                <Table.Cell px={2} py={2}>
                                    {move ? "Go to move #" + move : "Go to game start"}
                                </Table.Cell>
                                <Table.Cell textAlign='center' px={2} py={2}>
                                    {move % 2 ? "X" : "O"}
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </For>
                </Table.Body>
            </Table.Root>
        </VStack>
    );
}
