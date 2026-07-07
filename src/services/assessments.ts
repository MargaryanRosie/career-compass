import { supabase } from "@/integrations/supabase/client";
import type {
  AnswerRecord,
  CareerScore,
  RecommendedCareer,
  TraitProfile,
} from "@/engine/types";

export interface AssessmentRow {
  id: string;
  user_id: string;
  completed_at: string;
  final_trait_profile: TraitProfile;
  career_scores: CareerScore[];
  recommended_careers: RecommendedCareer[];
  answers: AnswerRecord[];
}

export async function saveAssessment(input: {
  userId: string;
  traitProfile: TraitProfile;
  careerScores: CareerScore[];
  recommendedCareers: RecommendedCareer[];
  answers: AnswerRecord[];
}) {
  const { data, error } = await supabase
    .from("assessments")
    .insert({
      user_id: input.userId,
      final_trait_profile: input.traitProfile as unknown as never,
      career_scores: input.careerScores as unknown as never,
      recommended_careers: input.recommendedCareers as unknown as never,
      answers: input.answers as unknown as never,
    })
    .select("id")
    .single();
  if (error) throw error;
  return data as { id: string };
}

export async function listAssessments(userId: string): Promise<AssessmentRow[]> {
  const { data, error } = await supabase
    .from("assessments")
    .select("*")
    .eq("user_id", userId)
    .order("completed_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as unknown as AssessmentRow[];
}

export async function getAssessment(id: string): Promise<AssessmentRow | null> {
  const { data, error } = await supabase
    .from("assessments")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return (data as unknown as AssessmentRow) ?? null;
}

export interface ProfileRow {
  id: string;
  email: string | null;
  full_name: string | null;
}

export async function getProfile(userId: string): Promise<ProfileRow | null> {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, email, full_name")
    .eq("id", userId)
    .maybeSingle();
  if (error) throw error;
  return (data as ProfileRow) ?? null;
}

export async function updateProfileName(userId: string, fullName: string) {
  const { error } = await supabase
    .from("profiles")
    .update({ full_name: fullName })
    .eq("id", userId);
  if (error) throw error;
}
