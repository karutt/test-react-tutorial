import { Button, Card, Center } from "@chakra-ui/react";

import Link from "next/link";

export default function Home() {
    return (
        <Center height='100vh' px={3}>
            <Card.Root maxWidth={460} p={12} gap={8}>
                <Card.Body gap={2}>
                    <Card.Title textStyle='2xl'>X vs O: Ultimate Showdown</Card.Title>
                    <Card.Description>
                        シンプルにして奥深い、究極の頭脳戦。
                        「三目並べ」を超えた、戦略と直感のバトルが今ここに。
                        友達と、またはAIと、限界まで読み合え。 あなたの “X”
                        は、勝利の一手になれるか？
                    </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent='space-between'>
                    <Button variant='outline' px={4} flex={1}>
                        設定
                    </Button>
                    <Link href='/game' passHref style={{ flex: 1 }}>
                        <Button px={4} w='100%'>
                            始める
                        </Button>
                    </Link>
                </Card.Footer>
            </Card.Root>
        </Center>
    );
}
