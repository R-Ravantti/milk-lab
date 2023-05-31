package org.rravanttipgp.milkapi;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/milk")
public class MilkController {

    private final MilkService service;

    public MilkController(MilkService service) {this.service = service;}

    @GetMapping
    public ResponseEntity<MilkListDTO> getAllMilks() {
        return ResponseEntity.ok(service.getAllMilks());
    }

    @GetMapping(path = "{id}")
    public ResponseEntity<Milk> getMilk(@PathVariable String id) {
        return ResponseEntity.ok(service.getMilk(id));
    }

    @PutMapping(path = "purchase")
    public ResponseEntity<Milk> purchaseMilk(@RequestBody MilkPurchaseDTO dto) {
        Milk purchasedMilk = service.purchaseMilk(dto.id(), dto.amount());
        if(purchasedMilk == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.accepted().body(purchasedMilk);
    }

    @PostMapping(path = "seed")
    public ResponseEntity<MilkListDTO> seedDatabase(@RequestBody MilkListDTO dto, HttpServletRequest req) {
        return ResponseEntity.created(URI.create(req.getRequestURI())).body(service.seedDatabase(dto));
    }
}
