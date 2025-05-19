"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Result = {
  teamAStake: string;
  teamBStake: string;
  payoutIfOneWins: string;
  totalBet: string;
  guaranteedLoss: string;
  bothWinPayout: string;
  bothWinProfit: string;
};

export default function Home() {
  const [teamAName, setTeamAName] = useState("Team A");
  const [teamBName, setTeamBName] = useState("Team B");
  const [teamAOdds, setTeamAOdds] = useState(1.65);
  const [teamBOdds, setTeamBOdds] = useState(2.05);
  const [teamAMin, setTeamAMin] = useState(1000);
  const [teamAMax, setTeamAMax] = useState(1300);
  const [payoutCap, setPayoutCap] = useState(2140);
  const [results, setResults] = useState<Result[]>([]);

  const hedgeBetWithBothWin = (
    teamAOdds: number,
    teamBOdds: number,
    teamAMin: number,
    teamAMax: number,
    payoutCap: number
  ): Result[] => {
    const output: Result[] = [];

    if (teamAMin > teamAMax) {
      [teamAMin, teamAMax] = [teamAMax, teamAMin];
    }

    for (let stakeA = teamAMin; stakeA <= teamAMax; stakeA += 10) {
      const payoutA = stakeA * teamAOdds;
      if (payoutA > payoutCap) continue;

      const stakeB = payoutA / teamBOdds;
      const payoutB = stakeB * teamBOdds;
      if (payoutB > payoutCap) continue;

      const totalBet = stakeA + stakeB;
      const guaranteedLoss = totalBet - payoutA;
      const bothWinPayout = payoutA + payoutB;
      const bothWinProfit = bothWinPayout - totalBet;

      output.push({
        teamAStake: stakeA.toFixed(2),
        teamBStake: stakeB.toFixed(2),
        payoutIfOneWins: payoutA.toFixed(2),
        totalBet: totalBet.toFixed(2),
        guaranteedLoss: guaranteedLoss.toFixed(2),
        bothWinPayout: bothWinPayout.toFixed(2),
        bothWinProfit: bothWinProfit.toFixed(2),
      });
    }

    return output;
  };

  const handleSubmit = () => {
    const res = hedgeBetWithBothWin(
      teamAOdds,
      teamBOdds,
      teamAMin,
      teamAMax,
      payoutCap
    );
    setResults(res);
  };

  return (
    <main className="container mx-auto p-4 md:p-6">
      <p className="mb-6">
        👉 In hedging ,
        <span className="text-[#bf5359] font-semibold">
          more stake is placed on the higher ratio and less on lower ratio
        </span>{" "}
        so that the payout is balanced and potential loss is minimized.
      </p>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Hedge Bet Calculator
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Calculate optimal hedging strategies for your bets
          </p>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <Label htmlFor="teamAName">Team A Name</Label>
              <Input
                id="teamAName"
                type="text"
                value={teamAName}
                onChange={(e) => setTeamAName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamBName">Team B Name</Label>
              <Input
                id="teamBName"
                type="text"
                value={teamBName}
                onChange={(e) => setTeamBName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamAOdds">{teamAName} Odds</Label>
              <Input
                id="teamAOdds"
                type="number"
                value={teamAOdds}
                onChange={(e) => setTeamAOdds(parseFloat(e.target.value))}
                step="0.01"
                min="1.01"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamBOdds">{teamBName} Odds</Label>
              <Input
                id="teamBOdds"
                type="number"
                value={teamBOdds}
                onChange={(e) => setTeamBOdds(parseFloat(e.target.value))}
                step="0.01"
                min="1.01"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamAMin">{teamAName} Min Stake</Label>
              <Input
                id="teamAMin"
                type="number"
                value={teamAMin}
                onChange={(e) => setTeamAMin(parseFloat(e.target.value))}
                step="10"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="teamAMax">{teamAName} Max Stake</Label>
              <Input
                id="teamAMax"
                type="number"
                value={teamAMax}
                onChange={(e) => setTeamAMax(parseFloat(e.target.value))}
                step="10"
                min="0"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="payoutCap">Payout Cap</Label>
              <Input
                id="payoutCap"
                type="number"
                value={payoutCap}
                onChange={(e) => setPayoutCap(parseFloat(e.target.value))}
                step="10"
                min="0"
              />
            </div>
          </div>

          <Button onClick={handleSubmit} className="w-full md:w-auto">
            Calculate
          </Button>
        </CardContent>
      </Card>

      {results.length === 0 ? (
        <Card className="mt-6">
          <CardContent className="p-6 text-center text-destructive">
            <p>
              👉 In hedging, more stake is placed on the higher ratio and less
              on lower ratio so that the payout is balanced and potential loss
              is minimized.
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card className="mt-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Results</CardTitle>
              <Badge variant="outline">
                {results.length} combinations found
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{teamAName}</TableHead>
                    <TableHead>{teamBName}</TableHead>
                    <TableHead>1 Win Payout</TableHead>
                    <TableHead>Total Bet</TableHead>
                    <TableHead>Loss</TableHead>
                    <TableHead>Both Win</TableHead>
                    <TableHead>Profit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.map((r, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">
                        {r.teamAStake}
                      </TableCell>
                      <TableCell>{r.teamBStake}</TableCell>
                      <TableCell>{r.payoutIfOneWins}</TableCell>
                      <TableCell>{r.totalBet}</TableCell>
                      <TableCell className="text-red-500">
                        {r.guaranteedLoss}
                      </TableCell>
                      <TableCell>{r.bothWinPayout}</TableCell>
                      <TableCell className="text-green-600 font-semibold">
                        {r.bothWinProfit}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            <p>
              Results are calculated in increments of 10 units between min and
              max stakes.
            </p>
          </CardFooter>
        </Card>
      )}
    </main>
  );
}
