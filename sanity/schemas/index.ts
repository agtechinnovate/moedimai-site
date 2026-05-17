import type { SchemaTypeDefinition } from "sanity";
import { buyerResource } from "./buyer-resource";
import { evidenceDocument } from "./evidence-document";
import { faq } from "./faq";
import { journalPost } from "./journal-post";
import { page } from "./page";
import { pressItem } from "./press-item";
import { product } from "./product";
import { teamMember } from "./team-member";

export const schemaTypes: SchemaTypeDefinition[] = [
  page,
  journalPost,
  product,
  evidenceDocument,
  faq,
  teamMember,
  pressItem,
  buyerResource,
];
