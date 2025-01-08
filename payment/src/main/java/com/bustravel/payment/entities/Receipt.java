package com.bustravel.payment.entities;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name= "receipt_payment")
public class Receipt {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="receipt_id")
    private int receiptId;

    @ManyToMany
    @JoinTable(
        name = "receipt_Payment",
        joinColumns = @JoinColumn(name = "receipt_id"),
        inverseJoinColumns = @JoinColumn(name = "payment_id")
    )
    private Set<Payment> payments;

    public int getReceiptId() {
        return receiptId;
    }

    public void setReceiptId(int receiptId) {
        this.receiptId = receiptId;
    }

    public Set<Payment> getPayments() {
        return payments;
    }

    public void setPayments(Set<Payment> payments) {
        this.payments = payments;
    }
}
