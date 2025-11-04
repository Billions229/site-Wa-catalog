"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import NumberFlow from "@number-flow/react"

export type PlanLevel = "starter" | "pro" | "all" | string

export interface PricingFeature {
  name: string
  included: PlanLevel | null
}

export interface PricingPlan {
  name: string
  level: PlanLevel
  price: {
    monthly: number
    yearly: number
  }
  popular?: boolean
}

export interface PricingTableProps extends React.HTMLAttributes<HTMLDivElement> {
  features: PricingFeature[]
  plans: PricingPlan[]
  onPlanSelect?: (plan: PlanLevel) => void
  defaultPlan?: PlanLevel
  defaultInterval?: "monthly" | "yearly"
  containerClassName?: string
  buttonClassName?: string
  showButton?: boolean
}

export function PricingTable({
  features,
  plans,
  onPlanSelect,
  defaultPlan = "pro",
  defaultInterval = "monthly",
  className,
  containerClassName,
  buttonClassName,
  showButton = true,
  ...props
}: PricingTableProps) {
  const [isYearly, setIsYearly] = React.useState(defaultInterval === "yearly")
  const [selectedPlan, setSelectedPlan] = React.useState<PlanLevel>(defaultPlan)

  const handlePlanSelect = (plan: PlanLevel) => {
    setSelectedPlan(plan)
    onPlanSelect?.(plan)
  }

  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-16 md:py-20 px-4",
        "fade-bottom overflow-hidden pb-0",
      )}
    >
      <div className={cn("w-full max-w-3xl mx-auto px-4", containerClassName)} {...props}>
        <div className="flex justify-end mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-4 py-2 rounded-md transition-all duration-200 font-medium",
                !isYearly 
                  ? "bg-primary text-white shadow-md" 
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200",
              )}
            >
              Mensuel
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-4 py-2 rounded-md transition-all duration-200 font-medium",
                isYearly 
                  ? "bg-primary text-white shadow-md" 
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200",
              )}
            >
              Annuel
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.level
            return (
              <button
                key={plan.name}
                type="button"
                onClick={() => handlePlanSelect(plan.level)}
                className={cn(
                  "relative flex-1 p-6 rounded-xl text-left transition-all duration-500",
                  "border-2 active:scale-95",
                  isSelected 
                    ? "border-primary bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 shadow-2xl shadow-primary/30 ring-4 ring-primary/40 scale-105 sm:scale-110" 
                    : "border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:shadow-lg hover:scale-102",
                )}
              >
                {/* Indicateur visuel en haut pour mobile */}
                {isSelected && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-xl animate-pulse" />
                    <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg">
                      ✓
                    </div>
                  </>
                )}
                
                <div className="flex items-center justify-between mb-3">
                  <span className={cn(
                    "text-lg font-bold transition-all",
                    isSelected && "text-primary"
                  )}>{plan.name}</span>
                  {plan.popular && (
                    <span className="text-xs bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-full font-bold shadow-lg animate-pulse">
                      ⭐ Populaire
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1">
                  <NumberFlow
                    format={{
                      style: "decimal",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    value={isYearly ? plan.price.yearly : plan.price.monthly}
                    className={cn(
                      "text-4xl font-extrabold transition-all",
                      isSelected ? "text-primary drop-shadow-lg" : "text-gray-900 dark:text-gray-100"
                    )}
                  />
                  <span className={cn(
                    "text-sm font-semibold transition-all",
                    isSelected ? "text-primary" : "text-gray-500 dark:text-gray-400"
                  )}>
                    {plan.price.monthly === 0 && plan.price.yearly === 0 ? "" : " FCFA"}
                    {plan.price.monthly === 0 && plan.price.yearly === 0 ? "" : `/${isYearly ? "an" : "mois"}`}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        <div className="border-2 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <div className="min-w-[640px] divide-y divide-gray-200 dark:divide-gray-700">
              <div className="flex items-center p-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
                <div className="flex-1 text-sm font-bold text-gray-900 dark:text-gray-100">Fonctionnalités</div>
                <div className="flex items-center gap-8 text-sm">
                  {plans.map((plan) => (
                    <div 
                      key={plan.level} 
                      className={cn(
                        "w-16 text-center font-bold transition-all",
                        plan.level === selectedPlan ? "text-primary scale-110" : "text-gray-600 dark:text-gray-400"
                      )}
                    >
                      {plan.name}
                    </div>
                  ))}
                </div>
              </div>
              {features.map((feature, idx) => {
                const isActiveFeature = shouldShowCheck(feature.included, selectedPlan)
                return (
                  <div
                    key={feature.name}
                    className={cn(
                      "flex items-center p-4 transition-all duration-500 relative",
                      isActiveFeature 
                        ? "bg-primary/30 border-l-[6px] border-primary shadow-lg shadow-primary/20" 
                        : "bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800/50",
                    )}
                  >
                    {/* Indicateur visuel supplémentaire pour mobile */}
                    {isActiveFeature && (
                      <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary animate-pulse" />
                    )}
                    
                    <div className={cn(
                      "flex-1 text-sm font-medium transition-all duration-300",
                      isActiveFeature && "text-primary font-bold pl-2"
                    )}>
                      {isActiveFeature && <span className="mr-2 text-primary">▶</span>}
                      {feature.name}
                    </div>
                    <div className="flex items-center gap-8 text-sm">
                      {plans.map((plan) => {
                        const isSelectedPlan = plan.level === selectedPlan
                        const hasFeature = shouldShowCheck(feature.included, plan.level)
                        
                        return (
                          <div
                            key={plan.level}
                            className={cn(
                              "w-16 flex justify-center transition-all duration-500",
                              isSelectedPlan && "transform scale-150 bg-primary/20 rounded-full p-1"
                            )}
                          >
                            {hasFeature ? (
                              <CheckIcon className={cn(
                                "transition-all duration-300",
                                isSelectedPlan ? "w-7 h-7 text-primary drop-shadow-lg" : "w-5 h-5 text-gray-400"
                              )} />
                            ) : (
                              <span className="text-gray-300 dark:text-gray-600 text-lg">—</span>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {showButton && (
          <div className="mt-8 text-center">
            <Button
              className={cn("w-full sm:w-auto bg-primary hover:bg-primary/90 px-8 py-2 rounded-xl", buttonClassName)}
            >
              Commencer avec {plans.find((p) => p.level === selectedPlan)?.name}
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

function shouldShowCheck(included: PricingFeature["included"], level: string): boolean {
  if (included === "all") return true
  if (included === "pro" && (level === "pro" || level === "all")) return true
  if (included === "starter" && (level === "starter" || level === "pro" || level === "all")) return true
  return false
}
